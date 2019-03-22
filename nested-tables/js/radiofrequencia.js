<script type="text/javascript" th:inline="javascript">
	
	
	var configSIData  = [{
		indice : 1, setor : 1, modelo : "XPOT35235", fabricante : "Ericsson", situacao : "Instalar", altura : 20, 
    	tiltMecanico : 20, tiltEletrico : 15, azimute : 18, 
    	tecnologiasFrequencia : [{tecnologia : "GSM",frequencia : "200Mhz, 500Mhz"},{tecnologia : "LTE", frequencia : "700Mhz, 1500Mhz"}],
    	atma : 10, dtma : 66, filtro : "N/A", ret : 12, riu : 44, rmu : 1, 
    	perifericosRF : [{periferico : "Diplex", situacao : "Existente", tecFreq : "GSM 200Mhz, 500Mhz"},
    					 {periferico : "Quadriplex", situacao : "Instalar", tecFreq : "GSM 200Mhz, 500Mhz"}],
    		
    	cabeamento : [{caboBitola : "Feeder - 1 5/8", quantidade : 15, comprimento : 20},
    				  {caboBitola : "Feeder - 1 5/8", quantidade : 3, comprimento : 12}]
	}];
	
	var gridSI = $('#jsGridConfiguracaoSI');
	jsGridSI(configSIData);
	
	function jsGridSI(siData) {
		let self = this;
		gridSI.jsGrid({
			width: "100%",
		 	height: "auto",
		 
		    inserting: true,
		    editing: true,
		    sorting: true,
		    paging: false,
			data : siData,
			
			onItemInserting : function (args) {
				args.item.tecnologiasFrequencia = [];
				args.item.cabeamento = [];
				args.item.perifericosRF = [];
			},
			
			onItemInserted : function (args) {
				gridSI.jsGrid("loadData");
			},
			
			
		    fields: [
	        	{ type: "control", width: 40 },
	        	{ name : "indice", title : "Índice", type : "number", width : 40, align : "center"},
	        	{ name : "setor", title : "Setor", type : "number", width : 40, align : "center"},
	        	{ name : "modelo", title: "Modelo", type: "text", width: 80, align : "center",
					validate: {
                    	validator: "required",
                    	message: "Favor informar o Modelo"
                    } 
	        	},
	            { name: "fabricante", title: "Fabricante", type: "text", width: 80, align : "center",
						validate: {
                        	validator: "required",
                        	message: "Favor informar o Fabricante"
                        } 
		        },
	            { name: "altura", title: "Altura", type: "number", width: 40, align : "center",
					validate: {
                    	validator: "required",
                    	message: "Favor informar a Altura"
                    } 
		        },
		        { name: "tiltMecanico", title: "Tilt Mecânico", type: "number", width: 80, align : "center",
					validate: {
                    	validator: "required",
                    	message: "Favor informar o Tilt Mecânico"
                    } 
		        },
		        { name: "tiltEletrico", title: "Tilt Elétrico", type: "number", width: 80, align : "center",
					validate: {
                    	validator: "required",
                    	message: "Favor informar o Til Elétrico"
                    } 
		        },
		        { name: "azimute", title: "Azimute", type: "number", width: 80, align : "center",
					validate: {
                    	validator: "required",
                    	message: "Favor informar o Azimute"
                    } 
		        },
		        {
		        	name : "tecnologiasFrequencia", title : "Tecnologia/Frequência", width : 350, align : "center", 
		        	itemTemplate : function (value, item) {
				          var $nestedGrid = $("<div>");         
			                $nestedGrid.click(function(e) {
			                	e.stopPropagation();
			                });
			                
			                $nestedGrid.jsGrid({
						          width: "100%",
			      			      height: "auto",
								  inserting: true,
			        			  editing: true,
						          data: item.tecnologiasFrequencia,
			            		  fields: [
						            	{ name: "tecnologia", type : "text", title : "Tecnologia", width: 60 , align : "center",
						            		validate: {
						                    	validator: "required",
						                    	message: "Favor informar a Tecnologia"
						                    } 
						            	},
			      			        	{ name: "frequencia", type : "text", title : "Frequência", width: 100, align : "center" ,
						            		validate: {
						                    	validator: "required",
						                    	message: "Favor informar a Frequência"
						                    } 	
			      			        	},
			                    		{ type: "control", width : 40 }
						          ],
			                      
						          rowClick: function(args) {
			    								if(self.editing) {
			        								self.editItem($(args.event.target).closest("tr"));
			        								args.event.stopPropagation();
			    								}
											}
						          });
			      			    return $nestedGrid;
					} //Closes itemTemplate
		        },
		        { name: "atma", title: "ATMA", type: "number", width: 40, align : "center",
					validate: {
                    	validator: "required",
                    	message: "Favor informar o ATMA"
                    } 
		        },
		        { name: "dtma", title: "DTMA", type: "number", width: 40, align : "center",
					validate: {
                    	validator: "required",
                    	message: "Favor informar o DTMA"
                    } 
		        },
		        { name: "filtro", title: "Filtro", type: "text", width: 40, align : "center",
					validate: {
                    	validator: "required",
                    	message: "Favor informar o Filtro"
                    } 
		        },
		        { name: "ret", title: "RET", type: "number", width: 40, align : "center",
					validate: {
                    	validator: "required",
                    	message: "Favor informar o RET"
                    } 
		        },
		        { name: "riu", title: "RIU", type: "number", width: 40, align : "center",
					validate: {
                    	validator: "required",
                    	message: "Favor informar o RIU"
                    } 
		        },
		        { name: "rmu", title: "RMU", type: "number", width: 40, align : "center",
					validate: {
                    	validator: "required",
                    	message: "Favor informar o RMU"
                    } 
		        },
		        {
		        	name : "perifericosRF", title : "Periféricos", width : 350, align : "center", 
		        	itemTemplate : function (value, item) {
				          var $nestedGrid = $("<div>");         
			                $nestedGrid.click(function(e) {
			                	e.stopPropagation();
			                });
			                
			                $nestedGrid.jsGrid({
						          width: "100%",
			      			      height: "auto",
								  inserting: true,
			        			  editing: true,
						          data: item.perifericosRF,
			            		  fields: [
						            	{ name: "periferico", type : "text", title : "Periférico", width: 60 , align : "center", 
						            		validate: {
						                    	validator: "required",
						                    	message: "Favor informar o Periférico"
						                    }						            		
						            	},
			      			        	{ name: "situacao", type : "text", title : "Situação", width: 60, align : "center" ,
						            		validate: {
						                    	validator: "required",
						                    	message: "Favor informar a Situação"
						                    }	
			      			        	},
			      			        	{ name: "tecFreq", type : "text", title : "Tecnologia/Frequência", width : 160, align : "center", 
			      			        		validate: {
						                    	validator: "required",
						                    	message: "Favor informar a Tecnologia/Frequência"
						                    }	
			      			        	},
			                    		{ type: "control", width : 40 }
						          ],
			                      
						          rowClick: function(args) {
			    								if(self.editing) {
			        								self.editItem($(args.event.target).closest("tr"));
			        								args.event.stopPropagation();
			    								}
											}
						          });
			      			    return $nestedGrid;
					} //Closes itemTemplate
		        },
		        {
		        	name : "cabeamento", title : "Cabeamento", width : 350, align : "center", 
		        	itemTemplate : function (value, item) {
				          var $nestedGrid = $("<div>");         
			                $nestedGrid.click(function(e) {
			                	e.stopPropagation();
			                });
			                
			                $nestedGrid.jsGrid({
						          width: "100%",
			      			      height: "auto",
								  inserting: true,
			        			  editing: true,
						          data: item.cabeamento,
			            		  fields: [
						            	{ name: "caboBitola", type : "text", title : "Cabo e Bitola", width: 100 , align : "center", 
						            		validate: {
						                    	validator: "required",
						                    	message: "Favor informar o Cabo e Bitola"
						                    } 	
						            	},
			      			        	{ name: "quantidade", type : "number", title : "Qtde.", width: 40, align : "center" , 
						            		validate: {
						                    	validator: "required",
						                    	message: "Favor informar a quantidade"
						                    } 	
			      			        	},
			      			        	{ name: "comprimento", type : "number", width : 60, align : "center", 
			      			        		validate: {
			      		                    	validator: "required",
			      		                    	message: "Favor informar o comprimento"
			      		                    } 
			      			        	},
			                    		{ type: "control", width : 40 }
						          ],
			                      
						          rowClick: function(args) {
			    								if(self.editing) {
			        								self.editItem($(args.event.target).closest("tr"));
			        								args.event.stopPropagation();
			    								}
											}
						          });
			      			    return $nestedGrid;
					} //Closes itemTemplate
		        }
	        ]
		});
	}
</script>