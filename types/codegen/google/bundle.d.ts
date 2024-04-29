import * as _81 from "./api/http";
import * as _82 from "./protobuf/any";
import * as _83 from "./protobuf/descriptor";
import * as _84 from "./protobuf/duration";
import * as _85 from "./protobuf/empty";
import * as _86 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _81.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Http;
            fromJSON(object: any): _81.Http;
            toJSON(message: _81.Http): unknown;
            fromPartial(object: Partial<_81.Http>): _81.Http;
        };
        HttpRule: {
            encode(message: _81.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.HttpRule;
            fromJSON(object: any): _81.HttpRule;
            toJSON(message: _81.HttpRule): unknown;
            fromPartial(object: Partial<_81.HttpRule>): _81.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _81.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.CustomHttpPattern;
            fromJSON(object: any): _81.CustomHttpPattern;
            toJSON(message: _81.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_81.CustomHttpPattern>): _81.CustomHttpPattern;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _86.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Timestamp;
            fromJSON(object: any): _86.Timestamp;
            toJSON(message: _86.Timestamp): unknown;
            fromPartial(object: Partial<_86.Timestamp>): _86.Timestamp;
        };
        Empty: {
            encode(_: _85.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Empty;
            fromJSON(_: any): _85.Empty;
            toJSON(_: _85.Empty): unknown;
            fromPartial(_: Partial<_85.Empty>): _85.Empty;
        };
        Duration: {
            encode(message: _84.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Duration;
            fromJSON(object: any): _84.Duration;
            toJSON(message: _84.Duration): unknown;
            fromPartial(object: Partial<_84.Duration>): _84.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _83.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _83.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _83.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _83.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _83.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _83.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _83.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _83.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _83.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _83.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _83.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _83.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _83.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _83.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _83.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _83.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _83.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _83.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _83.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _83.FieldOptions_CType;
        FieldOptions_JSType: typeof _83.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _83.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _83.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _83.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _83.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.FileDescriptorSet;
            fromJSON(object: any): _83.FileDescriptorSet;
            toJSON(message: _83.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_83.FileDescriptorSet>): _83.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _83.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.FileDescriptorProto;
            fromJSON(object: any): _83.FileDescriptorProto;
            toJSON(message: _83.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_83.FileDescriptorProto>): _83.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _83.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.DescriptorProto;
            fromJSON(object: any): _83.DescriptorProto;
            toJSON(message: _83.DescriptorProto): unknown;
            fromPartial(object: Partial<_83.DescriptorProto>): _83.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _83.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _83.DescriptorProto_ExtensionRange;
            toJSON(message: _83.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_83.DescriptorProto_ExtensionRange>): _83.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _83.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.DescriptorProto_ReservedRange;
            fromJSON(object: any): _83.DescriptorProto_ReservedRange;
            toJSON(message: _83.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_83.DescriptorProto_ReservedRange>): _83.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _83.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ExtensionRangeOptions;
            fromJSON(object: any): _83.ExtensionRangeOptions;
            toJSON(message: _83.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_83.ExtensionRangeOptions>): _83.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _83.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.FieldDescriptorProto;
            fromJSON(object: any): _83.FieldDescriptorProto;
            toJSON(message: _83.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_83.FieldDescriptorProto>): _83.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _83.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.OneofDescriptorProto;
            fromJSON(object: any): _83.OneofDescriptorProto;
            toJSON(message: _83.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_83.OneofDescriptorProto>): _83.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _83.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.EnumDescriptorProto;
            fromJSON(object: any): _83.EnumDescriptorProto;
            toJSON(message: _83.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_83.EnumDescriptorProto>): _83.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _83.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _83.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _83.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_83.EnumDescriptorProto_EnumReservedRange>): _83.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _83.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.EnumValueDescriptorProto;
            fromJSON(object: any): _83.EnumValueDescriptorProto;
            toJSON(message: _83.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_83.EnumValueDescriptorProto>): _83.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _83.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ServiceDescriptorProto;
            fromJSON(object: any): _83.ServiceDescriptorProto;
            toJSON(message: _83.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_83.ServiceDescriptorProto>): _83.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _83.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MethodDescriptorProto;
            fromJSON(object: any): _83.MethodDescriptorProto;
            toJSON(message: _83.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_83.MethodDescriptorProto>): _83.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _83.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.FileOptions;
            fromJSON(object: any): _83.FileOptions;
            toJSON(message: _83.FileOptions): unknown;
            fromPartial(object: Partial<_83.FileOptions>): _83.FileOptions;
        };
        MessageOptions: {
            encode(message: _83.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MessageOptions;
            fromJSON(object: any): _83.MessageOptions;
            toJSON(message: _83.MessageOptions): unknown;
            fromPartial(object: Partial<_83.MessageOptions>): _83.MessageOptions;
        };
        FieldOptions: {
            encode(message: _83.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.FieldOptions;
            fromJSON(object: any): _83.FieldOptions;
            toJSON(message: _83.FieldOptions): unknown;
            fromPartial(object: Partial<_83.FieldOptions>): _83.FieldOptions;
        };
        OneofOptions: {
            encode(message: _83.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.OneofOptions;
            fromJSON(object: any): _83.OneofOptions;
            toJSON(message: _83.OneofOptions): unknown;
            fromPartial(object: Partial<_83.OneofOptions>): _83.OneofOptions;
        };
        EnumOptions: {
            encode(message: _83.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.EnumOptions;
            fromJSON(object: any): _83.EnumOptions;
            toJSON(message: _83.EnumOptions): unknown;
            fromPartial(object: Partial<_83.EnumOptions>): _83.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _83.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.EnumValueOptions;
            fromJSON(object: any): _83.EnumValueOptions;
            toJSON(message: _83.EnumValueOptions): unknown;
            fromPartial(object: Partial<_83.EnumValueOptions>): _83.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _83.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ServiceOptions;
            fromJSON(object: any): _83.ServiceOptions;
            toJSON(message: _83.ServiceOptions): unknown;
            fromPartial(object: Partial<_83.ServiceOptions>): _83.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _83.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MethodOptions;
            fromJSON(object: any): _83.MethodOptions;
            toJSON(message: _83.MethodOptions): unknown;
            fromPartial(object: Partial<_83.MethodOptions>): _83.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _83.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.UninterpretedOption;
            fromJSON(object: any): _83.UninterpretedOption;
            toJSON(message: _83.UninterpretedOption): unknown;
            fromPartial(object: Partial<_83.UninterpretedOption>): _83.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _83.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.UninterpretedOption_NamePart;
            fromJSON(object: any): _83.UninterpretedOption_NamePart;
            toJSON(message: _83.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_83.UninterpretedOption_NamePart>): _83.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _83.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.SourceCodeInfo;
            fromJSON(object: any): _83.SourceCodeInfo;
            toJSON(message: _83.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_83.SourceCodeInfo>): _83.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _83.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.SourceCodeInfo_Location;
            fromJSON(object: any): _83.SourceCodeInfo_Location;
            toJSON(message: _83.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_83.SourceCodeInfo_Location>): _83.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _83.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GeneratedCodeInfo;
            fromJSON(object: any): _83.GeneratedCodeInfo;
            toJSON(message: _83.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_83.GeneratedCodeInfo>): _83.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _83.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _83.GeneratedCodeInfo_Annotation;
            toJSON(message: _83.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_83.GeneratedCodeInfo_Annotation>): _83.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _82.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Any;
            fromJSON(object: any): _82.Any;
            toJSON(message: _82.Any): unknown;
            fromPartial(object: Partial<_82.Any>): _82.Any;
        };
    };
}
