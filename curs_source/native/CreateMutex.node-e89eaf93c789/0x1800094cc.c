
/* Address: 0x1800094cc; Evidence: ev_27ea865ad26f5a9c8fb4176066ebaec47b50053b757c8ba604c1c70be80f17d4 */

undefined8 * FUN_1800094cc(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

