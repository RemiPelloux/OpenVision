
/* Address: 0x180005d60; Evidence: ev_c054f5f9d727249a149994f4c618296a207f0a4a06a57e64e2e363965de25090 */

void FUN_180005d60(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180005cf0(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_1800069f8(lVar1,param_1 + 3,param_1[1]);
  FUN_180006a64(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}

