
/* Address: 0x18000bce4; Evidence: ev_44c7666a5356ddccad5834a55eb21f9fea7fc5120d3ee39708657f955358b583 */

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
    if (DAT_180022c28 != 0) {
      iVar1 = common_flush_all(true);
      in_RAX = CONCAT44(extraout_var,iVar1);
    }
    return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
  }
  uVar2 = FUN_18000eec0(0x1800167e0,0x1800168e0);
  return uVar2;
}

