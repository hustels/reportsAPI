"use strict";
var ReportActionsService = (function () {
    function ReportActionsService() {
    }
    ReportActionsService.prototype.drawReportsTable = function () {
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
                    width: '4%',
                    options: { 'default': '----',
                        'Australia': 'Australia',
                        'Barcelona': 'Barcelona',
                        'China': 'China',
                        'Coruna': 'Coruña',
                        'Francia': 'Francia',
                        'Global': 'Global',
                        'Televent': 'Televent',
                        'Vicalvaro': 'Vicalvaro'
                    }
                },
                date: {
                    title: 'Fecha',
                    width: '12%',
                    inputClass: 'validate[required]'
                },
                session: {
                    title: 'Sesión',
                    width: '4%',
                    inputClass: 'validate[required]',
                },
                specification: {
                    title: 'Especificación',
                    width: '15%',
                    inputClass: 'validate[required]',
                },
                hostfilesystem: {
                    title: 'Host / FS',
                    width: '8%'
                },
                type: {
                    title: 'Tipo',
                    width: '3%',
                    options: { 'default': '---', 'FULL': 'FULL', 'INCR': 'INCR' }
                },
                reprocessed: {
                    title: 'Relanzado?',
                    width: '5%',
                    options: { 'default': '---', 'Si': 'Si', 'No': 'No' }
                },
                newsession: {
                    title: 'Nueva Session',
                    width: '7%',
                },
                incident: {
                    title: 'Incidencia',
                    width: '6%'
                },
                endok: {
                    title: 'Fin ok?',
                    width: '5%',
                    options: { 'Si': 'Si', 'No': 'No' }
                },
                notes: {
                    title: 'Observaciones',
                    width: '13%'
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
                var endok = $.trim(this_row.find('td:eq(9)').html()); //td:eq(0) means first td of this row
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
    return ReportActionsService;
}());
exports.ReportActionsService = ReportActionsService;
//# sourceMappingURL=reports.actions.service.js.map