<template>
	<v-dialog v-model="dialog" scrollable max-width="900px">
		<template v-slot:activator="{ on, attrs }">
			<v-btn color="primary" dark v-bind="attrs" v-on="on" x-large class="mx-4 mt-5">
				PS to TS Transfer
			</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<span class="headline"> PS to TS Transfer</span>
			</v-card-title>
			<v-divider></v-divider>
			<v-card-text>
				<v-container>
					<v-row>
						<v-col cols="12" sm="6">
							<v-text-field label="Name*" required></v-text-field>
						</v-col>
						<v-col cols="12" sm="6">
							<v-text-field label="ID"></v-text-field>
						</v-col>
						<v-col cols="12" sm="6">
							<v-select :items="['A7', 'A9', 'A4', 'A1']" label="Branch" required></v-select>
						</v-col>
						<v-col cols="12" sm="6">
							<v-text-field label="Phone Number"></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field
								label="Supervisor (on campus) / co-supervisor (off campus) Email*"
								required
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-select :items="['abc@abc.com', 'bcd@bcd.com']" label="HOD Email" required></v-select>
						</v-col>
						<v-col cols="12" sm="6">
							<v-select :items="['------------', 'PS-TS (Single Degree)']" label="Sub Type"></v-select>
						</v-col>
						<v-col cols="12" sm="6">
							<v-text-field label="CGPA"></v-text-field>
						</v-col>
						<v-col cols="12" sm="6">
							<v-select
								:items="['------------', 'On Campus', 'Off Campus']"
								label="Thesis Type"
							></v-select>
						</v-col>
						<v-col cols="12" sm="6">
							<v-select
								:items="['------------', 'On Campus', 'Off Campus']"
								label="Thesis Subject"
							></v-select>
						</v-col>
						<v-col cols="12">
							<v-text-field
								label="Name of Institute/Organization*"
								hint="Name of BITS Campus or Organization where thesis will be carried"
								persistent-hint
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-textarea rows="4" label="Extra Comments"></v-textarea>
						</v-col>
					</v-row>
				</v-container>
				<small>*indicates required field</small>
			</v-card-text>
			<v-divider></v-divider>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="blue darken-1" text @click="dialog = false">
					Close
				</v-btn>
				<v-btn color="blue darken-1" text @click="dialog = false">
					Submit
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	data: () => ({
		dialog: false,
	}),
};
</script>

<style></style>
