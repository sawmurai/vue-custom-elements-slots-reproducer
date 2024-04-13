# Usage

This is a pnpm workspace.

First, build the custom element in `packages/vue-custom-elements`. Then, run the demo in `packages/vue-custom-elements-consumer`.

```bash
pnpm install
(cd packages/vue-custom-elements && pnpm run build)
(cd packages/vue-custom-elements-consumer && pnpn run dev)
```
