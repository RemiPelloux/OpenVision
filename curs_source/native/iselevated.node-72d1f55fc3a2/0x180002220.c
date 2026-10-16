
/* Address: 0x180002220; Evidence: ev_a064afbe571942079595619bbe23dc9050e303a25b0e85a74e2b198428c4cd42 */

int FUN_180002220(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}

