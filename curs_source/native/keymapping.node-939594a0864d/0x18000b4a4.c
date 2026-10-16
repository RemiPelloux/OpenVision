
/* Address: 0x18000b4a4; Evidence: ev_2a626b6e4fb19f442f87d7a2d36acee1235ab1567a41d3121aa4433349c4f487 */

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
    if (DAT_1800282b8 != 0) {
      iVar1 = common_flush_all(true);
      in_RAX = CONCAT44(extraout_var,iVar1);
    }
    return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
  }
  uVar2 = FUN_1800105a8(0x18001a8f0,0x18001a9f0);
  return uVar2;
}

