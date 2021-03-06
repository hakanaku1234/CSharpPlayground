﻿module Microsoft.CodeAnalysis.CSharp.Symbols {
    export enum AttributeLocation {
        None = 0,
        Assembly = 1 << 0,
        Module = 1 << 1,
        Type = 1 << 2,
        Method = 1 << 3,
        Field = 1 << 4,
        Property = 1 << 5,
        Event = 1 << 6,
        Parameter = 1 << 7,
        Return = 1 << 8,
        TypeParameter = 1 << 9,
        Unknown = 1 << 10
    }
    export class AttributeLocationExtensions {
        public static ToDisplayString(locations: AttributeLocation): string {
            var result: System.Text.StringBuilder = new System.Text.StringBuilder();
            for (var i: number = 1; i < <number>AttributeLocation.Unknown; i <<= 1) {
                if ((locations & <AttributeLocation>i) != 0) {
                    if (result.Length > 0) {
                        result.Append(", ");
                    }
                    switch (<AttributeLocation>i) {
                        case AttributeLocation.Assembly:
                            result.Append("assembly");
                            break;
                        case AttributeLocation.Module:
                            result.Append("module");
                            break;
                        case AttributeLocation.Type:
                            result.Append("type");
                            break;
                        case AttributeLocation.Method:
                            result.Append("method");
                            break;
                        case AttributeLocation.Field:
                            result.Append("field");
                            break;
                        case AttributeLocation.Property:
                            result.Append("property");
                            break;
                        case AttributeLocation.Event:
                            result.Append("event");
                            break;
                        case AttributeLocation.Return:
                            result.Append("return");
                            break;
                        case AttributeLocation.Parameter:
                            result.Append("param");
                            break;
                        case AttributeLocation.TypeParameter:
                            result.Append("typevar");
                            break;
                        default:
                            throw Roslyn.Utilities.ExceptionUtilities.UnexpectedValue(i);
                    }
                }
            }
            return result.ToString();
        }
        public static ToAttributeLocation_8655(token: SyntaxToken): AttributeLocation {
            return AttributeLocationExtensions.ToAttributeLocation_9582(token.ValueText);
        }
        public static ToAttributeLocation_8655_NS(token: Syntax.InternalSyntax.SyntaxToken): AttributeLocation {
            return AttributeLocationExtensions.ToAttributeLocation_9582(token.ValueText);
        }
        private static ToAttributeLocation_9582(text: string): AttributeLocation {
            switch (text) {
                case "assembly":
                    return AttributeLocation.Assembly;
                case "module":
                    return AttributeLocation.Module;
                case "type":
                    return AttributeLocation.Type;
                case "return":
                    return AttributeLocation.Return;
                case "method":
                    return AttributeLocation.Method;
                case "field":
                    return AttributeLocation.Field;
                case "event":
                    return AttributeLocation.Event;
                case "param":
                    return AttributeLocation.Parameter;
                case "property":
                    return AttributeLocation.Property;
                case "typevar":
                    return AttributeLocation.TypeParameter;
                default:
                    return AttributeLocation.None;
            }
        }
    }
}