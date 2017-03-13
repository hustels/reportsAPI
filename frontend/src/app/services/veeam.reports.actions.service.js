"use strict";
var VeeamReportActionsService = (function () {
    function VeeamReportActionsService() {
    }
    VeeamReportActionsService.prototype.drawReportsTable = function () {
        $('#ReportTableContainer').jtable({
            //sorting: true, //Enable sorting
            //defaultSorting: 'date ASC', //Set default sorting
            //defaultSorting: 'date',
            toolbar: {
                items: [{
                        icon: '/app/static/images/excel.png',
                        text: 'Exportar a Excel',
                        click: function () {
                            alert('clicked');
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
                listAction: 'http://localhost:8080/reports/veeam',
                createAction: 'http://localhost:8080/reports/veeam/add',
                updateAction: 'http://localhost:8080/reports/veeam/update',
                deleteAction: 'http://localhost:8080/reports/veeam/delete'
            },
            fields: {
                _id: {
                    key: true,
                    list: false
                },
                environment: {
                    title: 'Entorno',
                    width: '5%',
                    options: { 'default': '----',
                        'Australia': 'Australia',
                        'Barcelona': 'Barcelona',
                        'Global': 'Global',
                        'Televent': 'Televent',
                        'Vicalvaro': 'Vicalvaro'
                    }
                },
                date: {
                    title: 'Fecha',
                    width: '15%',
                    inputClass: 'validate[required]'
                },
                retries: {
                    title: 'Total retry',
                    width: '10%',
                    inputClass: 'validate[required]',
                },
                specification: {
                    title: 'Nombre de job',
                    width: '20%',
                    inputClass: 'validate[required]',
                },
                objects: {
                    title: 'Objetos fallidos',
                    width: '10%'
                },
                reprocessed: {
                    title: 'Relanzado?',
                    width: '10%',
                    options: { 'default': '---', 'Si': 'Si', 'No': 'No' }
                },
                link: {
                    title: 'Incidencia',
                    width: '10%'
                },
                endok: {
                    title: 'Fin ok?',
                    width: '5%',
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
                $('#Edit-date').datetimepicker();
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
                var endok = $.trim(this_row.find('td:eq(7)').html()); //td:eq(0) means first td of this row
                // jtable-selecting-column
                if (endok == 'Si') {
                    //00FF00
                    $(this_row).css({ "background": "#5ADA5A" });
                }
                if (endok == 'No') {
                    //00FF00
                    $(this_row).css({ "background": "#FF5050" });
                }
            });
        }
        setTimeout(setRowsColor, 100);
    };
    return VeeamReportActionsService;
}());
exports.VeeamReportActionsService = VeeamReportActionsService;
//# sourceMappingURL=veeam.reports.actions.service.js.map