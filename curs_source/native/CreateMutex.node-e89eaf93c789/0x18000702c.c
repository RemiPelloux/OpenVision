
/* Address: 0x18000702c; Evidence: ev_c5ee91f75882f0a7a31959aef219aa2b0550c73e0817814b0eb166c0539c9727 */

int FUN_18000702c(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}

