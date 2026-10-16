
/* Address: 0x180010a20; Evidence: ev_a710ba75dac3496027228b56f86e90fcc50fee0a9e6b792a89eb049998e34759 */

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
    if (DAT_180029d58 != 0) {
      iVar1 = common_flush_all(true);
      in_RAX = CONCAT44(extraout_var,iVar1);
    }
    return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
  }
  uVar2 = FUN_180013c1c(0x18001c6a0,0x18001c7a0);
  return uVar2;
}

