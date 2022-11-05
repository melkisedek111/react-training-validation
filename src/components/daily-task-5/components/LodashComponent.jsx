import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import _ from "lodash";
import ContactCard from "../../daily-task-4/ContactCard.jsx";

const dummyData = [
	{
		firstName: "Gordon",
		lastName: "Kelly",
		dateOfBirth: "2/2/1995",
		emailAddress: "Migueltame@bellsouth.net",
		contactNumber: "09759377467",
		aboutMyself:
			"Bacon ipsum dolor amet chislic pork loin tenderloin leberkas burgdoggen ball tip hamburger shank tongue fatback filet mignon meatloaf shankle sirloin.  Kielbasa cow meatloaf chislic chicken.  Shankle leberkas shank jerky spare ribs.  Shoulder pig pork loin porchetta spare ribs ham hock, strip steak short loin hamburger short ribs ground round swine.",
		address: "566 Lilla Summit, Apt. 317, 62423, Eugeniaport, Texas",
		level: "Intermediate",
		jobTitle: "Web Developer",
	},
	{
		firstName: "Joshua",
		lastName: "Wilkins",
		dateOfBirth: "11/2/1981",
		emailAddress: "soreDanielle60@me.com",
		contactNumber: "09597427559",
		aboutMyself:
			"Bacon ipsum dolor amet porchetta pancetta chicken tail meatloaf pork.  Pastrami picanha beef short loin sausage tail leberkas ball tip meatloaf tongue pancetta.  Hamburger salami landjaeger pork chop burgdoggen short ribs pig chislic.  Salami alcatra biltong cow capicola.",
		address:
			"64157 Ignacio Isle, Suite 835, 12662-0637, DuBuqueborough, Alaska",
		level: "Beginner",
		jobTitle: "UI / UX Designer",
	},
	{
		firstName: "Virginia",
		lastName: "Berry",
		dateOfBirth: "1/17/1994",
		emailAddress: "bloodyBradley@yahoo.fr",
		contactNumber: "09860945275",
		aboutMyself:
			"Bacon ipsum dolor amet andouille pork chop sirloin kielbasa alcatra pork belly.  Tri-tip pork sirloin, shank beef ribs shankle pastrami beef meatloaf cupim tenderloin ball tip leberkas ham hock.  Meatloaf flank alcatra buffalo porchetta tongue.  Chuck kielbasa tenderloin ham pork belly swine.",
		address: "44929 Maria Well, Apt. 544, 20047, Ziemannburgh, Kansas",
		level: "Pro",
		jobTitle: "Network Engineer",
	},
	{
		firstName: "Vanessa",
		lastName: "Graham",
		dateOfBirth: "8/6/1992",
		emailAddress: "determinedKate@yahoo.com",
		contactNumber: "09164785368",
		aboutMyself:
			"Bacon ipsum dolor amet flank biltong alcatra meatloaf filet mignon chuck.  Drumstick filet mignon bacon andouille boudin pork loin.  Corned beef tenderloin short ribs pork, burgdoggen flank pork chop shoulder meatloaf beef salami pork belly.  Short loin pastrami capicola buffalo tongue, pork venison chislic ham hock burgdoggen meatloaf kevin beef ribs leberkas.  Pork prosciutto pastrami turducken.  Burgdoggen tongue prosciutto boudin fatback turkey, drumstick rump.  Picanha prosciutto cupim flank, t-bone chicken buffalo pig cow short loin.",
		address: "543 Rodriguez Trace, Suite 944, 75447-7063, Armaniside, Colorado",
		level: "Beginner",
		jobTitle: "Information security",
	},
	{
		firstName: "Keith",
		lastName: "Edmunds",
		dateOfBirth: "4/23/1981",
		emailAddress: "delightfulAaron63@hetnet.nl",
		contactNumber: "09299421129",
		aboutMyself:
			"Bacon ipsum dolor amet ground round kevin short ribs ham.  Chicken tenderloin chislic doner alcatra turkey ham porchetta pork belly ball tip.  Flank landjaeger spare ribs, frankfurter drumstick pork chop pancetta ribeye buffalo cupim meatloaf.  Brisket turkey kevin biltong turducken t-bone hamburger pig pork loin.  Doner pork belly ham hock chuck fatback capicola meatball boudin strip steak ribeye sausage tail kevin short ribs.",
		address: "959 Carissa Loaf, Suite 872, 53895-2688, South Dimitri, New York",
		level: "Pro",
		jobTitle: "Network Engineer",
	},
	{
		firstName: "Grace",
		lastName: "Lyman",
		dateOfBirth: "5/27/1999",
		emailAddress: "inquisitiveMarco37@yahoo.com",
		contactNumber: "09073076946",
		aboutMyself:
			"Bacon ipsum dolor amet picanha salami meatball, sirloin pastrami andouille tail pig tenderloin alcatra chicken ribeye sausage.  Meatball turkey sirloin pork loin pork.  Boudin ground round meatball burgdoggen venison swine ball tip.  Chislic landjaeger brisket shank filet mignon tongue pork corned beef pork chop ham porchetta biltong picanha turducken cow.",
		address: "3985 Hagenes Station, Suite 410, 09305, West Marcellus, Colorado",
		level: "Intermediate",
		jobTitle: "Network Engineer",
	},
];

const LodashComponent = () => {
	const [searchKeyword, setSearchKeyword] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	const array1 = [
		{ id: 20, name: "alex" },
		{ id: 30, name: "alina" },
	];
	const array2 = [
		{ id: 40, name: "hello" },
		{ id: 30, name: "world" },
	];
	const differenceWith = _.differenceWith(array1, array2, _.isEqual);
	const xorBy = _.xorBy(array1, array2, "id");
	const exercise_A = { differenceWith, xorBy };
	console.log(exercise_A);

	const str = ["u", "ec"];
	const arr = [
		{ storageVal: "u", table: ["E", "F"] },
		{ storageVal: "data", id: 3 },
		{ storageVal: "ec", table: ["E"] },
	];

	const exercise_B = _.map(
		_.filter(arr, (data1) =>
			_.find(str, (data2) => data2 === data1.storageVal)
		),
		(data3) => data3.table
	);
	console.log(exercise_B);

	const array3 = [["E"], ["F"]];
	const exercise_C = _.flatten(array3);
	console.log(exercise_C);

	const array4 = [
		["E", "F"],
		[["F"], ["G"]],
	];
	const exercise_D = _.flattenDeep(array4);

    /**
	 * DOCUMENT: This function is used to search user via onchange. <br>
	 * Triggered: when inputting keyword on the search field <br>
	 * Last Updated Date: November 5, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleSearch = (event) => {
		const {
			target: { value },
		} = event;
		setSearchKeyword(value);

		let filteredData = _.filter(
			dummyData,
			(data) =>
				data.firstName.toUpperCase().indexOf(value.toUpperCase()) > -1 ||
				data.lastName.toUpperCase().indexOf(value.toUpperCase()) > -1
		);
        filteredData = !value.trim() ? [] : filteredData;

		setFilteredData(filteredData);
	};

	return (
		<Box>
			<TextField
				fullWidth
				id="search"
				placeholder="Search by Name"
				value={searchKeyword}
				label="Search"
				variant="outlined"
				onChange={handleSearch}
			/>
			<Box
				style={{
					marginTop: 10,
					display: "flex",
					flexWrap: "wrap",
					gap: 15,
					justifyContent: "space-between",
				}}
			>
				{!searchKeyword.trim()
					? dummyData.map((user) => (
							<ContactCard
								firstName={user.firstName}
								lastName={user.lastName}
								dateOfBirth={user.dateOfBirth}
								emailAddress={user.emailAddress}
								contactNumber={user.contactNumber}
								aboutMyself={user.aboutMyself}
								address={user.address}
								level={user.level}
								jobTitle={user.jobTitle}
							/>
					  ))
					: null}
				{filteredData.map((user) => (
					<ContactCard
						firstName={user.firstName}
						lastName={user.lastName}
						dateOfBirth={user.dateOfBirth}
						emailAddress={user.emailAddress}
						contactNumber={user.contactNumber}
						aboutMyself={user.aboutMyself}
						address={user.address}
						level={user.level}
						jobTitle={user.jobTitle}
					/>
				))}
			</Box>
		</Box>
	);
};

export default LodashComponent;
