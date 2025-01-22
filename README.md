## Extensions spec example 
Example extension spec for error groups

### Quick run instructions
```sh
npm install
npx ts-node src/test-schema.ts
or
npm run start
```
### Quick edit 
The schema that you're testing can be eddited by changing the error-groups-schema.json or 
replacing it with your own in `test-schema.ts` 
```ts
import { OpenrpcDocument } from "@open-rpc/meta-schema";
import { dereferenceDocument, validateOpenRPCDocument } from "ext-schema-utils-js-proto";
import errorGroupSupportedDocument from "./error-groups-schema.json"
```
### In other context
```sh
npm install ext-schema-utils-js-proto
```
This will allow you to just use the latest prototype scheam utils 
in the context, it is the feat/extensions branch , while it's blocked on further PR review