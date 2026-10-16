
/* Address: 0x180004088; Evidence: ev_4cfa89f227045958217127277467ab03c2a7442d87d2f60b378bfaa5c5fc5887 */

undefined8 * FUN_180004088(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

