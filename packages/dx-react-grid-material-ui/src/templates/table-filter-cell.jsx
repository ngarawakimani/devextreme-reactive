import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, Input } from 'material-ui';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  cell: {
    verticalAlign: 'top',
    paddingTop: theme.spacing.unit + 4,
    paddingRight: theme.spacing.unit,
    '& ~ $cell': {
      paddingLeft: theme.spacing.unit,
    },
  },
  input: {
    width: '100%',
  },
});

const TableFilterCellBase = ({
  style, filter, setFilter, classes, children,
}) => (
  <TableCell
    className={classes.cell}
    style={style}
  >
    {children || (
      <Input
        className={classes.input}
        value={filter ? filter.value : ''}
        placeholder="Filter..."
        onChange={e => setFilter(e.target.value ? { value: e.target.value } : null)}
      />
    )}
  </TableCell>
);

TableFilterCellBase.propTypes = {
  style: PropTypes.object,
  filter: PropTypes.object,
  setFilter: PropTypes.func,
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

TableFilterCellBase.defaultProps = {
  style: null,
  filter: null,
  setFilter: () => {},
  children: undefined,
};

export const TableFilterCell = withStyles(styles, { name: 'TableFilterCell' })(TableFilterCellBase);
