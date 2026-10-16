
/* Address: 0x18000ddfc; Evidence: ev_812921def40676aa740ff8a9b8806b83c9b52d443bb9a05ec21bc7eb0135e325 */

undefined8 * FUN_18000ddfc(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

