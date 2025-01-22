import { OpenrpcDocument } from "@open-rpc/meta-schema";
import { dereferenceDocument, validateOpenRPCDocument } from "ext-schema-utils-js-proto";
import errorGroupSupportedDocument from "./error-groups-schema.json"

async function testSchema(){
  const dereffed = await dereferenceDocument(errorGroupSupportedDocument as OpenrpcDocument);
  // Run validation
  //const result = validateOpenRPCDocument(goodExtensionDoc as OpenrpcDocument);
  console.log(JSON.stringify(dereffed, null, 2))
  const result = validateOpenRPCDocument(dereffed as OpenrpcDocument);

// Pretty print results
if (result === true) {
  console.log("✅ Schema is valid!");
} else {
  console.log("❌ Schema validation failed:");
  console.log(result.message);
} 
}
testSchema()