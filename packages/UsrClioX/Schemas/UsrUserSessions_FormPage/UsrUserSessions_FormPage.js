define("UsrUserSessions_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Input_9885v6o",
				"values": {
					"layoutConfig": {
						"colSpan": 1,
						"rowSpan": 1,
						"column": 1,
						"row": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"labelPosition": "above",
					"label": "$Resources.Strings.UsrUserSessionsDS_UsrIpAddress_yzeowa0",
					"control": "$UsrUserSessionsDS_UsrIpAddress_yzeowa0"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_johtrgc",
				"values": {
					"layoutConfig": {
						"colSpan": 1,
						"rowSpan": 1,
						"column": 1,
						"row": 2
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"labelPosition": "above",
					"label": "$Resources.Strings.UsrUserSessionsDS_UsrLoginTime_4nziztv",
					"control": "$UsrUserSessionsDS_UsrLoginTime_4nziztv"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_ajvyorm",
				"values": {
					"layoutConfig": {
						"colSpan": 1,
						"rowSpan": 1,
						"column": 1,
						"row": 3
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"labelPosition": "above",
					"label": "$Resources.Strings.UsrUserSessionsDS_UsrLogoutTime_k6kp7t5",
					"control": "$UsrUserSessionsDS_UsrLogoutTime_k6kp7t5"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_i7siakp",
				"values": {
					"layoutConfig": {
						"colSpan": 1,
						"rowSpan": 1,
						"column": 1,
						"row": 4
					},
					"type": "crt.ComboBox",
					"labelPosition": "above",
					"label": "$Resources.Strings.UsrUserSessionsDS_UsrUsers_t1abepd",
					"control": "$UsrUserSessionsDS_UsrUsers_t1abepd",
					"listActions": [],
					"showValueAsLink": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_m43eivn",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_m43eivn_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_i7siakp",
				"propertyName": "listActions",
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
					"UsrUserSessionsDS_UsrIpAddress_yzeowa0": {
						"modelConfig": {
							"path": "UsrUserSessionsDS.UsrIpAddress"
						}
					},
					"UsrUserSessionsDS_UsrLoginTime_4nziztv": {
						"modelConfig": {
							"path": "UsrUserSessionsDS.UsrLoginTime"
						}
					},
					"UsrUserSessionsDS_UsrLogoutTime_k6kp7t5": {
						"modelConfig": {
							"path": "UsrUserSessionsDS.UsrLogoutTime"
						}
					},
					"UsrUserSessionsDS_UsrUsers_t1abepd": {
						"modelConfig": {
							"path": "UsrUserSessionsDS.UsrUsers"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrUserSessionsDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrUserSessions"
							}
						}
					},
					"primaryDataSourceName": "UsrUserSessionsDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});