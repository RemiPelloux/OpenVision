
/* Address: 0x18000924c; Evidence: ev_af4315a60a8ce94e664735246acc43610e1d78fbc6847303ba77b375674f56df */

undefined8 * FUN_18000924c(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

