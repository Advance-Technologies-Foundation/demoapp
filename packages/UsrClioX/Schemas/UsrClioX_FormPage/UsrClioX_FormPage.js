define("UsrClioX_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrUsers"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "7d8497c4-c66f-4f5e-b0be-e4fb2aa94d01",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ProgressBarContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"fitContent": true,
					"color": "transparent",
					"borderRadius": "none",
					"items": [],
					"padding": {
						"top": "none",
						"right": "small",
						"bottom": "none",
						"left": "small"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProgressBar",
				"values": {
					"type": "crt.EntityStageProgressBar",
					"saveOnChange": true,
					"askUserToChangeSchema": false,
					"entityName": "UsrUsers"
				},
				"parentName": "ProgressBarContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_stbl6kp",
				"values": {
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"labelPosition": "auto",
					"label": "$Resources.Strings.PDS_UsrUsername_o1u3361",
					"control": "$PDS_UsrUsername_o1u3361"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailInput_u4tfkhn",
				"values": {
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"labelPosition": "auto",
					"label": "$Resources.Strings.PDS_UsrEmail_rnith0j",
					"control": "$PDS_UsrEmail_rnith0j"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_hg6aomh",
				"values": {
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"labelPosition": "auto",
					"label": "$Resources.Strings.PDS_UsrCreatedAt_ehvctnv",
					"control": "$PDS_UsrCreatedAt_ehvctnv"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_ngi60b9",
				"values": {
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"labelPosition": "auto",
					"label": "$Resources.Strings.PDS_UsrUpdatedAt_8t5c6kr",
					"control": "$PDS_UsrUpdatedAt_8t5c6kr"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_xbiujy7",
				"values": {
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"labelPosition": "auto",
					"label": "$Resources.Strings.PDS_UsrDcmStage_534n7am",
					"control": "$PDS_UsrDcmStage_534n7am",
					"listActions": [],
					"showValueAsLink": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_xd7k4kk",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xd7k4kk_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_xbiujy7",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_v0oa41p",
				"values": {
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_v0oa41p_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_ogr0rfg",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_v0oa41p",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ns1mh8b",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_ogr0rfg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_9jh2mb3",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_9jh2mb3_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"defaultValues": [
								{
									"attributeName": "UsrUsers",
									"value": "$Id"
								}
							],
							"entityName": "UsrUserSessions"
						}
					}
				},
				"parentName": "FlexContainer_ns1mh8b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_k8p568r",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_k8p568r_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_gsenkvhDS"
						}
					}
				},
				"parentName": "FlexContainer_ns1mh8b",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_o8f784k",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_o8f784k_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_ns1mh8b",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_qbpp0xs",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_qbpp0xs_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_gsenkvh"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_o8f784k",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_60tqmd4",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_60tqmd4_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrUserSessions"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_o8f784k",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_79g5ujn",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_79g5ujn_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_79g5ujn_GridDetail_gsenkvh",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_gsenkvh"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_79g5ujn_SearchValue",
							"GridDetailSearchFilter_79g5ujn_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_ns1mh8b",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_uhsufjf",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_v0oa41p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_gsenkvh",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_gsenkvh",
					"primaryColumnName": "GridDetail_gsenkvhDS_Id",
					"columns": [
						{
							"code": "GridDetail_gsenkvhDS_UsrIpAddress",
							"dataValueType": 28,
							"caption": "#ResourceString(GridDetail_gsenkvhDS_UsrIpAddress)#",
							"id": "04f99e06-3c58-ed1d-4a3e-ae219a62967c"
						},
						{
							"code": "GridDetail_gsenkvhDS_UsrLoginTime",
							"dataValueType": 7,
							"caption": "#ResourceString(GridDetail_gsenkvhDS_UsrLoginTime)#",
							"id": "3302149e-e5a6-a84f-2a67-b8c4463d19db"
						},
						{
							"code": "GridDetail_gsenkvhDS_UsrLogoutTime",
							"dataValueType": 7,
							"caption": "#ResourceString(GridDetail_gsenkvhDS_UsrLogoutTime)#",
							"id": "4bfc4a69-4a35-ccb0-c809-cd823bac6269"
						},
						{
							"code": "GridDetail_gsenkvhDS_UsrUsers",
							"dataValueType": 10,
							"caption": "#ResourceString(GridDetail_gsenkvhDS_UsrUsers)#",
							"id": "a59066a9-c62e-b7e2-d85d-23e0d4664247"
						}
					]
				},
				"parentName": "GridContainer_uhsufjf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_hr9w30j",
				"values": {
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_hr9w30j_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_m923g3x",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_hr9w30j",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_atxu2id",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_m923g3x",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_v02xcpg",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_v02xcpg_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"defaultValues": [
								{
									"attributeName": "UsrUsers",
									"value": "$Id"
								}
							],
							"entityName": "UsrUserActions"
						}
					}
				},
				"parentName": "FlexContainer_atxu2id",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_p0cr1eo",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_p0cr1eo_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_u4wnjndDS"
						}
					}
				},
				"parentName": "FlexContainer_atxu2id",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_ky1acf5",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_ky1acf5_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_atxu2id",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_z3qh8k9",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_z3qh8k9_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_u4wnjnd"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ky1acf5",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_vvwi02k",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_vvwi02k_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrUserActions"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ky1acf5",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_0i7l9gp",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_0i7l9gp_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_0i7l9gp_GridDetail_u4wnjnd",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_u4wnjnd"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_0i7l9gp_SearchValue",
							"GridDetailSearchFilter_0i7l9gp_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_atxu2id",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ymkelor",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_hr9w30j",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_u4wnjnd",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_u4wnjnd",
					"primaryColumnName": "GridDetail_u4wnjndDS_Id",
					"columns": [
						{
							"code": "GridDetail_u4wnjndDS_UsrActionType",
							"dataValueType": 28,
							"caption": "#ResourceString(GridDetail_u4wnjndDS_UsrActionType)#",
							"id": "b78cf68a-07ee-1dcf-1420-97ef83c6ab47"
						},
						{
							"code": "GridDetail_u4wnjndDS_UsrActionTimestamp",
							"dataValueType": 7,
							"caption": "#ResourceString(GridDetail_u4wnjndDS_UsrActionTimestamp)#",
							"id": "62a5b48a-89d9-49f6-2dd0-c6b6a597e664"
						},
						{
							"code": "GridDetail_u4wnjndDS_UsrMetadata",
							"dataValueType": 28,
							"caption": "#ResourceString(GridDetail_u4wnjndDS_UsrMetadata)#",
							"id": "69368988-c977-8d14-5396-1ee04f013446"
						},
						{
							"code": "GridDetail_u4wnjndDS_UsrUsers",
							"dataValueType": 10,
							"caption": "#ResourceString(GridDetail_u4wnjndDS_UsrUsers)#",
							"id": "1c73114f-0b63-5b98-7774-24c87e5f1045"
						}
					]
				},
				"parentName": "GridContainer_ymkelor",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextStepsTab",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "Next steps",
					"iconPosition": "left-icon",
					"icon": "arrow-circle-right"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextStepsHeaderContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "NextStepsTab",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextStepsLabel",
				"values": {
					"type": "crt.Label",
					"caption": "Next steps",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "NextStepsHeaderContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextStepsAddBtn",
				"values": {
					"type": "crt.Button",
					"caption": "Add next steps",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "NextStepsHeaderContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NextStepsCreateTask",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Create a task",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.AddNextStepRequest",
						"params": {
							"entityName": "Activity"
						}
					}
				},
				"parentName": "NextStepsAddBtn",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextStepsCreateEmail",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Create an email",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateEmailRequest"
					}
				},
				"parentName": "NextStepsAddBtn",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NextSteps",
				"values": {
					"type": "crt.NextSteps",
					"masterSchemaId": "$Id",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					},
					"masterSchemaName": "UsrUsers"
				},
				"parentName": "NextStepsTab",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrUsername_o1u3361": {
						"modelConfig": {
							"path": "PDS.UsrUsername"
						}
					},
					"PDS_UsrEmail_rnith0j": {
						"modelConfig": {
							"path": "PDS.UsrEmail"
						}
					},
					"PDS_UsrCreatedAt_ehvctnv": {
						"modelConfig": {
							"path": "PDS.UsrCreatedAt"
						}
					},
					"PDS_UsrUpdatedAt_8t5c6kr": {
						"modelConfig": {
							"path": "PDS.UsrUpdatedAt"
						}
					},
					"PDS_UsrDcmStage_534n7am": {
						"modelConfig": {
							"path": "PDS.UsrDcmStage"
						}
					},
					"GridDetail_gsenkvh": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_gsenkvhDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_79g5ujn_GridDetail_gsenkvh",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_gsenkvhDS_UsrIpAddress": {
									"modelConfig": {
										"path": "GridDetail_gsenkvhDS.UsrIpAddress"
									}
								},
								"GridDetail_gsenkvhDS_UsrLoginTime": {
									"modelConfig": {
										"path": "GridDetail_gsenkvhDS.UsrLoginTime"
									}
								},
								"GridDetail_gsenkvhDS_UsrLogoutTime": {
									"modelConfig": {
										"path": "GridDetail_gsenkvhDS.UsrLogoutTime"
									}
								},
								"GridDetail_gsenkvhDS_UsrUsers": {
									"modelConfig": {
										"path": "GridDetail_gsenkvhDS.UsrUsers"
									}
								},
								"GridDetail_gsenkvhDS_Id": {
									"modelConfig": {
										"path": "GridDetail_gsenkvhDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_u4wnjnd": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_u4wnjndDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_0i7l9gp_GridDetail_u4wnjnd",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_u4wnjndDS_UsrActionType": {
									"modelConfig": {
										"path": "GridDetail_u4wnjndDS.UsrActionType"
									}
								},
								"GridDetail_u4wnjndDS_UsrActionTimestamp": {
									"modelConfig": {
										"path": "GridDetail_u4wnjndDS.UsrActionTimestamp"
									}
								},
								"GridDetail_u4wnjndDS_UsrMetadata": {
									"modelConfig": {
										"path": "GridDetail_u4wnjndDS.UsrMetadata"
									}
								},
								"GridDetail_u4wnjndDS_UsrUsers": {
									"modelConfig": {
										"path": "GridDetail_u4wnjndDS.UsrUsers"
									}
								},
								"GridDetail_u4wnjndDS_Id": {
									"modelConfig": {
										"path": "GridDetail_u4wnjndDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_gsenkvhDS": [
							{
								"attributePath": "UsrUsers",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_u4wnjndDS": [
							{
								"attributePath": "UsrUsers",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrUsers"
						},
						"scope": "page"
					},
					"GridDetail_gsenkvhDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrUserSessions",
							"attributes": {
								"UsrIpAddress": {
									"path": "UsrIpAddress"
								},
								"UsrLoginTime": {
									"path": "UsrLoginTime"
								},
								"UsrLogoutTime": {
									"path": "UsrLogoutTime"
								},
								"UsrUsers": {
									"path": "UsrUsers"
								}
							}
						}
					},
					"GridDetail_u4wnjndDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrUserActions",
							"attributes": {
								"UsrActionType": {
									"path": "UsrActionType"
								},
								"UsrActionTimestamp": {
									"path": "UsrActionTimestamp"
								},
								"UsrMetadata": {
									"path": "UsrMetadata"
								},
								"UsrUsers": {
									"path": "UsrUsers"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});