define("UsrUserActions_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Input_fimpf6a",
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
					"label": "$Resources.Strings.UsrUserActionsDS_UsrActionType_2sjg8c9",
					"control": "$UsrUserActionsDS_UsrActionType_2sjg8c9"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_exq9jo1",
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
					"label": "$Resources.Strings.UsrUserActionsDS_UsrActionTimestamp_2do82i3",
					"control": "$UsrUserActionsDS_UsrActionTimestamp_2do82i3"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_0u9pv4l",
				"values": {
					"layoutConfig": {
						"colSpan": 1,
						"rowSpan": 1,
						"column": 1,
						"row": 3
					},
					"type": "crt.Input",
					"multiline": false,
					"labelPosition": "above",
					"label": "$Resources.Strings.UsrUserActionsDS_UsrMetadata_77l29u7",
					"control": "$UsrUserActionsDS_UsrMetadata_77l29u7"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_wqm74ap",
				"values": {
					"layoutConfig": {
						"colSpan": 1,
						"rowSpan": 1,
						"column": 1,
						"row": 4
					},
					"type": "crt.ComboBox",
					"labelPosition": "above",
					"label": "$Resources.Strings.UsrUserActionsDS_UsrUsers_yivkfxd",
					"control": "$UsrUserActionsDS_UsrUsers_yivkfxd",
					"listActions": [],
					"showValueAsLink": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_5dct4w8",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_5dct4w8_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_wqm74ap",
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
					"UsrUserActionsDS_UsrActionType_2sjg8c9": {
						"modelConfig": {
							"path": "UsrUserActionsDS.UsrActionType"
						}
					},
					"UsrUserActionsDS_UsrActionTimestamp_2do82i3": {
						"modelConfig": {
							"path": "UsrUserActionsDS.UsrActionTimestamp"
						}
					},
					"UsrUserActionsDS_UsrMetadata_77l29u7": {
						"modelConfig": {
							"path": "UsrUserActionsDS.UsrMetadata"
						}
					},
					"UsrUserActionsDS_UsrUsers_yivkfxd": {
						"modelConfig": {
							"path": "UsrUserActionsDS.UsrUsers"
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
						"UsrUserActionsDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrUserActions"
							}
						}
					},
					"primaryDataSourceName": "UsrUserActionsDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});