# TableEditColumn Plugin Reference

A plugin that renders a command column (a column containing controls used for row editing/creating/deleting and commiting/canceling changes).

## User Reference

### Dependencies

- [EditingState](editing-state.md)
- [TableView](table-view.md)

### Properties

Name | Type | Default | Description
-----|------|---------|------------
cellTemplate | Component&lt;[CommandCellProps](#command-cell-props)&gt; | | A component that renders a cell within the command column and the data row
headingCellTemplate | Component&lt;[CommandHeadingCellProps](#command-heading-cell-props)&gt; | | A component that renders a cell within the command column and the heading row
commandTemplate | Component&lt;[CommandProps](#command-props)&gt; | | A component that renders command controls within the command column cell
allowCreating | bool | false | If set to true, the 'New' command is rendered within the heading row's command cell
allowEditing | bool | false | If set to true, the 'Edit' command is rendered within the data row's command cell
allowDeleting | bool | false | If set to true, the 'Delete' command is rendered within the data row's command cell

## Interfaces

### <a name="command-cell-props"></a>CommandCellProps

Describes properties passed to the command cell template of a data row.

A value with the following shape:

Field | Type | Description
------|------|------------
row | [TableRow](#table-row) | Specifies an edited table row with applied changes
column | [TableColumn](#table-column) | Specifies a table column
onStartEditing | () => void | Switches a row to the editing mode
onCancelEditing | () => void | Switches a row to the read-only mode
onCommitChanges | () => void | Initiates committing of row changes
onDelete | () => void | Initiates row deletion
allowEditing | bool | Specifies if a row can be edited
allowDeleting | bool | Specifies if a row can be deleted
commandTemplate | Component&lt;[CommandProps](#command-props)&gt; | A component that renders command controls within the command column cell
editCommandText | string | Specifies the 'edit' command text
deleteCommandText | string | Specifies the 'delete' command text
commitCommandText | string | Specifies the 'commit' command text
cancelCommandText | string | Specifies the 'cancel' command text
style | Object | Styles that should be applied to the root cell element

### <a name="command-heading-cell-props"></a>CommandHeadingCellProps

Describes properties passed to the command cell template of a heading row.

A value with the following shape:

Field | Type | Description
------|------|------------
row | [TableRow](#table-row) | Specifies an editing table row with applied changes
column | [TableColumn](#table-column) | Specifies a table column
onAddNewRow | () => void | Creates a new row
allowCreating | bool | Specifies if a new row can be created
commandTemplate | Component&lt;[CommandProps](#command-props)&gt; | A component that renders command controls within the command column cell
createCommandText | string | Specifies the 'create' command text
style | Object | Styles that should be applied to the root cell element

### <a name="command-props"></a>CommandProps

Describes properties passed to the command control template.

A value with the following shape:

Field | Type | Description
------|------|------------
onCommand | () => void | Executes the command
text | string | Specifies the text to be rendered within the command control

## Plugin Developer Reference

To be described...