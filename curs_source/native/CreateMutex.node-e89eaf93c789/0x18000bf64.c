
/* Address: 0x18000bf64; Evidence: ev_a7ed2e4ded99f6f2b8188eefc7721de2ea75b31bc80fb7c40b8a9ab557c9ca55 */

/* Library Function - Single Match
    __acrt_uninitialize
   
   Library: Visual Studio 2019 Release */

undefined8 __acrt_uninitialize(bool param_1)

{
  int iVar1;
  undefined8 in_RAX;
  undefined4 extraout_var;
  undefined8 uVar2;
  
  if (param_1) {
    if (DAT_180023c28 != 0) {
      iVar1 = common_flush_all(true);
      in_RAX = CONCAT44(extraout_var,iVar1);
    }
    return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
  }
  uVar2 = FUN_18000f140(0x1800177d0,0x1800178d0);
  return uVar2;
}

