package com.twilio.oai.resource;

import com.twilio.oai.Inflector;
import com.twilio.oai.PathUtils;
import com.twilio.oai.TwilioJavaGenerator;

import java.util.Arrays;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import io.swagger.v3.oas.models.Operation;
import io.swagger.v3.oas.models.PathItem;
import lombok.RequiredArgsConstructor;

import static com.twilio.oai.TwilioJavaGenerator.PATH_SEPARATOR_PLACEHOLDER;

@RequiredArgsConstructor
public class Resource {
    private final String path;
    private final PathItem pathItem;
    private final Inflector inflector;

    public Resource getParentResource(IResourceTree resourceTree) {
        for(Map.Entry entrySet: pathItem.getExtensions().entrySet()) {
            if (entrySet.getKey().equals("x-twilio")) {
                if (((Map<?, ?>) entrySet.getValue()).containsKey("parent")) {
                    String parent =((Map<?, String>) entrySet.getValue()).get("parent");
                    return resourceTree.findResource(parent, false);
                }
            }
        }
        return null;
    }

    public String getClassName(final Operation operation) {
        final Optional<String> className = getClassNameFromExtensions(operation.getExtensions());

        return className.orElseGet(this::getClassName);
    }

    public String getClassName() {
        final Optional<String> className = getClassNameFromExtensions(pathItem.getExtensions());

        return className.orElseGet(() -> inflector.singular(PathUtils.fetchLastElement(path,
                                                                                       PATH_SEPARATOR_PLACEHOLDER)));
    }

    @SuppressWarnings("unchecked")
    private Optional<String> getClassNameFromExtensions(final Map<String, Object> extensions) {
        if (extensions != null) {
            final Map<String, Object> xTwilio = (Map<String, Object>) extensions.get("x-twilio");

            if (xTwilio != null) {
                final String className = (String) xTwilio.get("className");

                if (className != null) {
                    return Optional.of(transformClassName(className));
                }
            }
        }

        return Optional.empty();
    }

    private String transformClassName(final String className) {
        return Arrays.stream(className.split("_")).map(TwilioJavaGenerator::capitalize).collect(Collectors.joining());
    }

    public String resourceName() {
        return this.path;
    }
}
