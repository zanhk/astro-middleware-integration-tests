import { createResolver, defineIntegration } from "astro-integration-kit";

export const integration = defineIntegration({
	name: "package-name",
	setup() {
		return {
			hooks: {
				"astro:config:setup": (params) => {
					const { addMiddleware } = params;
					const { resolve } = createResolver(import.meta.url);
					addMiddleware({
						entrypoint: resolve("./middleware.ts"),
						order: "pre",
					});
				},
			},
		};
	},
});
