<script context="module">
    import Dexie from 'dexie';

    const database = new Dexie('localDb');

	export { database as localDb };

    database.version(1).stores({
        tickets: 'id, task, tasklong, goals, archived, creationdate, author, room, duedate',
        users: 'id, short, shortcolor, staredtickets',
    });

    database.open().catch(function (err) {
        console.error('Failed to open db: ' + (err.stack || err));
    });

    /*DEBUGGING START*/

	let demousersIn = [
        {
			id: 0,
		    short: "BHG",
            shortcolor: "",
            staredtickets: ""
	    },
        {
			id: 1,
		    short: "STO",
            shortcolor: "",
            staredtickets: ""
	    }
    ];

	let demoticketsIn = [
	{	
		id : 0,
		task: "Austausch Whiteboard",
		tasklong: "Altes Whiteboard durch neues Modell ersetzen.",
		goals: [
			{
				description : "Anlieferung durch Legamaster",
				checked : 1
			},
			{
				description : "Demontage altes Board",
				checked : 1
			},
			{
				description : "Neues Board anbringen",
				checked : 1
			},
			{
				description : "Altes Board ins Lab zur Wiederverwertung",
				checked : 0
			}
		],
		archived: 0,
		creationdate: "01.03.2022",
		author: "BHG",
		room: "4.101",
		duedate: "21.06.2022"
	},	
	{
		id: 1,
		task: "Reparatur Beamer",
		tasklong: "EPSON Projektor, Überhitzt ständig, Abmontieren und Entstauben",
		goals: [
			{
				description : "Kauf Druckluftreiniger",
				checked : 1
			},
			{
				description : "Abmonieren und gründlich im Lab reinigen",
				checked : 0
			},
			{
				description : "Wiederanschrauben im Klassenzimmer",
				checked : 0
			}
		],
		archived: 1,
		creationdate: "01.03.2022",
		author: "STO",
		room: "2.102",
		duedate: "02.01.2022"
	},
	];
	/*
    database.users.bulkPut(demousersIn).then(function() {
        console.log("Done putting users");
    }).catch(Dexie.BulkError, function (e) {
        console.error ("(Partial) error at putting users")
    });

    database.tickets.bulkPut(demoticketsIn).then(function() {
        console.log("Done putting tickets");
    }).catch(Dexie.BulkError, function (e) {
        console.error ("(Partial) error at putting tickets")
    });
	*/
    /*DEBUGGING END*/

</script>