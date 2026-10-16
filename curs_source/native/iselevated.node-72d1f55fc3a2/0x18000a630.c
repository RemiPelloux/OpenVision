
/* Address: 0x18000a630; Evidence: ev_87253342425f089bae5f02794b6100e3cc2194cdec3b21fedb904dce2833884a */

uint FUN_18000a630(uint param_1)

{
  uint uVar1;
  undefined4 *puVar2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_18001aaf0;
    DAT_18001aaf0 = param_1;
  }
  else {
    puVar2 = (undefined4 *)FUN_180006080();
    *puVar2 = 0x16;
    FUN_180005ed8();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}

