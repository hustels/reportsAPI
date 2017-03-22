"use strict";
var OracleReportActionsService = (function () {
    function OracleReportActionsService() {
    }
    OracleReportActionsService.prototype.drawReportsTable = function () {
        $('#ReportTableContainer').jtable({
            //sorting: true, //Enable sorting
            //defaultSorting: 'date ASC', //Set default sorting
            //defaultSorting: 'date',
            toolbar: {
                items: [{
                        icon: '/app/static/images/excel.png',
                        text: 'Exportar a Excel',
                        click: function () {
                            $(".jtable").table2excel({
                                // exclude CSS class
                                exclude: ".noExl",
                                name: "Backups Oracle",
                                filename: "Backups Oracle" //do not include extension
                            });
                        }
                    }]
            },
            ajaxSettings: {
                type: 'POST',
                dataType: 'json',
                headers: { 'Access-Control-Allow-Origin': '*' },
            },
            title: 'Backups fallidos',
            paging: true,
            pageSize: 5,
            //åselecting:  true,
            //åselectingCheckboxes: true,
            //åmultiselect: true,
            actions: {
                listAction: 'http://localhost:8080/reports/oracle',
                createAction: 'http://localhost:8080/reports/oracle/add',
                updateAction: 'http://localhost:8080/reports/oracle/update',
                deleteAction: 'http://localhost:8080/reports/oracle/delete'
            },
            fields: {
                _id: {
                    key: true,
                    list: false
                },
                date: {
                    title: 'Fecha',
                    width: '15%',
                    inputClass: 'validate[required]'
                },
                dbname: {
                    title: 'BD',
                    width: '10%',
                    inputClass: 'validate[required]',
                },
                host: {
                    title: 'Host',
                    width: '10%',
                    inputClass: 'validate[required]',
                },
                type: {
                    title: 'Tipo?',
                    width: '6%',
                    options: { 'Diario': 'Diario', 'Semanal': 'Semanal', 'Mensual': 'Mensual' }
                },
                lastbk: {
                    title: 'Ultimo correcto',
                    width: '16%',
                    inputClass: 'validate[required]'
                },
                numfailed: {
                    title: 'Numero de BK erroneos',
                    width: '15%'
                },
                reprocessed: {
                    title: 'Relanzado?',
                    width: '5%',
                    options: { 'default': '---', 'Si': 'Si', 'No': 'No' }
                },
                link: {
                    title: 'Incidencia',
                    width: '7%'
                },
                endok: {
                    title: 'Fin ok?',
                    width: '6%',
                    options: { 'Si': 'Si', 'No': 'No' }
                },
                notes: {
                    title: 'Observaciones',
                    width: '20%'
                },
            },
            //Initialize validation logic when a form is created
            formCreated: function (event, data) {
                data.form.validationEngine();
                jQuery.datetimepicker.setLocale('es');
                data.form.validationEngine();
                $('#Edit-date').datetimepicker({
                    format: 'd/m/Y H:i',
                    lang: 'es',
                    startDate: new Date() //moment(new Date()).format('DD/MM/YYYY')
                });
                jQuery.datetimepicker.setLocale('es');
                data.form.validationEngine();
                $('#Edit-lastbk').datetimepicker({
                    format: 'd/m/Y H:i',
                    lang: 'es',
                    startDate: new Date() //moment(new Date()).format('DD/MM/YYYY')
                });
            },
            //Validate form when it is being submitted
            formSubmitting: function (event, data) {
                if ($('#Edit-environment').val() == 'default') {
                    alert('Debe seleccionar el entorno');
                    return false;
                }
                if ($('#Edit-type').val() == 'default') {
                    alert('Debe seleccionar el tipo de backup');
                    return false;
                }
                if ($('#Edit-reprocessed').val() == 'default') {
                    alert('Debe indicar si se ha relanzado');
                    return false;
                }
                return data.form.validationEngine('validate');
            },
            //Dispose validation logic when form is closed
            formClosed: function (event, data) {
                data.form.validationEngine('hide');
                data.form.validationEngine('detach');
            },
            recordUpdated: function () {
                setRowsColor();
            },
            rowInserted: function () {
                setRowsColor();
            }
        });
        $('#ReportTableContainer').jtable('load');
        function setRowsColor() {
            $(".jtable tr:gt(0)").each(function () {
                var this_row = $(this);
                var endok = $.trim(this_row.find('td:eq(8)').html()); //td:eq(0) means first td of this row
                // jtable-selecting-column
                if (endok == 'Si') {
                    //00FF00
                    $(this_row).css({ "background": "#98e698" }); //#5ADA5A
                }
                if (endok == 'No') {
                    //00FF00
                    $(this_row).css({ "background": "#ff7f7f" }); //#FF5050
                }
            });
        }
        setTimeout(setRowsColor, 100);
    };
    return OracleReportActionsService;
}());
exports.OracleReportActionsService = OracleReportActionsService;
//# sourceMappingURL=oracle.reports.actions.service.js.map