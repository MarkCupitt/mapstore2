const defaultValue = [42.3, 36.5];
/*
 * by convention, use an initial name (the action filename)
 * in order to describe better the action type, in this case MAP
 * separated by a colon : and the action constant name
*/
export const PAN_TO = 'MAP:PAN_TO';
export const panTo = (center = defaultValue) => ({
    type: PAN_TO,
    center
});
