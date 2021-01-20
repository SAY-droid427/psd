<template>
	<v-row justify="center">
		<v-dialog v-model="dialog" persistent max-width="600px">
			<template v-slot:activator="{ on, attrs }">
				<v-btn class="mx-2" fab dark color="indigo" v-bind="attrs" v-on="on">
					<v-icon dark>mdi-plus</v-icon>
				</v-btn>
			</template>
			<v-card>
				<v-card-title>
					<span class="headline">User Profile</span>
				</v-card-title>
				<template>
					<ValidationObserver ref="observer">
						<form class="px-6">
							<ValidationProvider
								v-slot="{ errors }"
								name="Name"
								rules="required|max:24"
							>
								<v-text-field
									v-model="name"
									:counter="24"
									:error-messages="errors"
									label="Name"
									required
								></v-text-field>
							</ValidationProvider>
							<ValidationProvider
								v-slot="{ errors }"
								name="email"
								rules="required|email"
							>
								<v-text-field
									v-model="email"
									:error-messages="errors"
									label="E-mail"
									required
								></v-text-field>
							</ValidationProvider>
							<ValidationProvider
								v-slot="{ errors }"
								name="id"
								rules="required"
							>
								<v-text-field
									v-model="id"
									:error-messages="errors"
									label="BITS ID"
									required
								></v-text-field>
							</ValidationProvider>
							<ValidationProvider
								v-slot="{ errors }"
								name="phone"
								rules="required|max:10"
							>
								<v-text-field
									type="number"
									:counter="10"
									v-model.number="phone"
									:error-messages="errors"
									label="Phone Number"
									required
								></v-text-field>
							</ValidationProvider>

							<v-btn class="mr-4" @click="submit">submit</v-btn>
							<v-btn @click="clear">clear</v-btn>
						</form>
					</ValidationObserver>
				</template>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" text @click="dialog = false"
						>Close</v-btn
					>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-row>
</template>
<script>
import { required, email, max } from "vee-validate/dist/rules";
import {
	extend,
	ValidationObserver,
	ValidationProvider,
	setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
	...required,
	message: "{_field_} can not be empty",
});

extend("max", {
	...max,
	message: "{_field_} may not be greater than {length} characters",
});

extend("email", {
	...email,
	message: "Email must be valid",
});
export default {
	name: "AddUserFormModal",
	components: {
		ValidationProvider,
		ValidationObserver,
	},
	data: () => ({
		dialog: false,
		name: "",
		email: "",
		id: "",
	}),

	methods: {
		submit() {
			this.$refs.observer.validate();
		},
		clear() {
			this.name = "";
			this.email = "";
			this.select = null;
			this.checkbox = null;
			this.$refs.observer.reset();
		},
	},
};
</script>
