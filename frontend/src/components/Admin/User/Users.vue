<template>
	<v-container grid-list-xs>
		<v-card>
			<v-card-title>
				Students
				<v-spacer></v-spacer>
				<v-text-field
					v-model="search"
					append-icon="mdi-magnify"
					label="Search"
					single-line
					hide-details
				></v-text-field>
			</v-card-title>
			<v-data-table
				:headers="headers"
				:items="students"
				:search="search"
				:items-per-page="10"
				class="elevation-1"
			></v-data-table>
		</v-card>
		<div class="float-right mt-3">
			<AddUserFormModal />
		</div>
	</v-container>
</template>

<script>
import AddUserFormModal from "./AddUserFormModal";
export default {
	components: { AddUserFormModal },
	data() {
		return {
			search: "",
			headers: [
				{
					text: "Name",
					align: "start",
					value: "name",
				},
				{ text: "Email", value: "email" },
				{ text: "BITS ID", value: "id" },
				{ text: "Phone Number", value: "phone", sortable: false },
			],
			students: [
				{
					name: "Ritik Taneja",
					email: "something@gmail.com",
					id: "2019A7PS0037G",
					phone: "7014462779",
				},
				{
					name: "Aitik Taneja",
					email: "something@gmail.com",
					id: "2019A7PS0037G",
					phone: "7014462779",
				},
				{
					name: "Ritik Taneja",
					email: "something@gmail.com",
					id: "2019A7PS0037G",
					phone: "7014462779",
				},
				{
					name: "Ritik Taneja",
					email: "something@gmail.com",
					id: "2019A7PS0037G",
					phone: "7014462779",
				},
			],
		};
	},
};
</script>
