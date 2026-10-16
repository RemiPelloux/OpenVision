
/* Address: 0x180006f54; Evidence: ev_dcd7190f030a9b82c8dee8efc0a45c8826fa97ea4484ff1be32d5592c5505daa */

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
    if (DAT_18001cb88 != 0) {
      iVar1 = common_flush_all(true);
      in_RAX = CONCAT44(extraout_var,iVar1);
    }
    return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
  }
  uVar2 = FUN_18000a130(0x1800116d0,0x1800117d0);
  return uVar2;
}

