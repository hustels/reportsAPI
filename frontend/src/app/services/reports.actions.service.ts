export class ReportActionsService {

		drawReportsTable(){
		(<any>$('#ReportTableContainer')).jtable({
			ajaxSettings: {
		    type: 'POST',
		    dataType: 'json',
		    headers: {'Access-Control-Allow-Origin': '*' },
				}
			,
            title: 'Report table',
            actions: {
                listAction: 'http://localhost:8080/reports',
                createAction: 'http://localhost:8080/reports/add',
                updateAction: 'http://localhost:8080/reports/update',
                deleteAction: 'http://localhost:8080/reports/delete'
                
            },
            fields: {
                _id: {
                    key: true,
                    list: false
                },
                environment: {
                    title: 'Entorno',
                    width: '6%',
                    options: { 'Televent': 'Televent', 'Global': 'Global' , 'Barcelona': 'Barcelona' }
                },
                date: {
                    title: 'date',
                    width: '12%'
                },
                session: {
                    title: 'Sesión',
                    width: '4%'
                },
                specification: {
                    title: 'Especificación',
                    width: '20%',
                    //create: false,
                    //edit: false
                },
                hostfilesystem: {
                    title: 'Host / FS',
                    width: '17%'
                },
                 type: {
                    title: 'Tipo',
                    width: '4%'
                },
                reprocessed: {
                    title: 'Relanzado?',
                    width: '5%',
                    options: { 'Si': 'Si', 'No': 'No'}
                },
                 newsession: {
                    title: 'Nueva Session',
                    width: '5%',
                   
                },
                incident: {
                    title: 'Incidencia',
                    width: '10%'
                },
                endok: {
                    title: 'Fin ok?',
                    width: '5%',
                    options: { 'Si': 'Si', 'No': 'No'}
                },
                 notes: {
                    title: 'Observaciones',
                    width: '13%'
                },
            }
        });


		(<any>$('#ReportTableContainer')).jtable('load');

		
		

		/*
		setTimeout(function(){
					$('.jtable tr').each(function(){
		    $(this).find('td').each(function(){
		        //do your stuff, you can use $(this) to get current cell

		        console.log(this);
		    })
		})

		} , 2000) */

	}
}