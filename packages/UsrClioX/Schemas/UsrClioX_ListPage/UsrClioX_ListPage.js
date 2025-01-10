define("UsrClioX_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrUsers"
						}
					}
				}
			},
			{
				"operation": "remove",
				"name": "SearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_Items",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"Items"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_SearchValue",
							"SearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrUsers"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"code": "PDS_UsrUsername",
							"dataValueType": 28,
							"caption": "#ResourceString(PDS_UsrUsername)#",
							"id": "1f3cbe22-5056-d755-81d0-bfb98cb67f16"
						},
						{
							"code": "PDS_UsrEmail",
							"dataValueType": 45,
							"caption": "#ResourceString(PDS_UsrEmail)#",
							"id": "92a72d1e-180e-9011-f154-53124262b944"
						},
						{
							"code": "PDS_UsrCreatedAt",
							"dataValueType": 7,
							"caption": "#ResourceString(PDS_UsrCreatedAt)#",
							"id": "6421177f-127e-0b40-1f7d-b7293e7df9d2"
						},
						{
							"code": "PDS_UsrUpdatedAt",
							"dataValueType": 7,
							"caption": "#ResourceString(PDS_UsrUpdatedAt)#",
							"id": "234f496c-ac99-f80f-a60c-e916ef5dbdfd"
						},
						{
							"code": "PDS_UsrDcmStage",
							"dataValueType": 10,
							"caption": "#ResourceString(PDS_UsrDcmStage)#",
							"id": "04a9f83b-ebd9-fd05-9d9d-4dfb4dd9c23e"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrUsername": {
						"modelConfig": {
							"path": "PDS.UsrUsername"
						}
					},
					"PDS_UsrEmail": {
						"modelConfig": {
							"path": "PDS.UsrEmail"
						}
					},
					"PDS_UsrCreatedAt": {
						"modelConfig": {
							"path": "PDS.UsrCreatedAt"
						}
					},
					"PDS_UsrUpdatedAt": {
						"modelConfig": {
							"path": "PDS.UsrUpdatedAt"
						}
					},
					"PDS_UsrDcmStage": {
						"modelConfig": {
							"path": "PDS.UsrDcmStage"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrUsers",
					"attributes": {
						"UsrUsername": {
							"path": "UsrUsername"
						},
						"UsrEmail": {
							"path": "UsrEmail"
						},
						"UsrCreatedAt": {
							"path": "UsrCreatedAt"
						},
						"UsrUpdatedAt": {
							"path": "UsrUpdatedAt"
						},
						"UsrDcmStage": {
							"path": "UsrDcmStage"
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