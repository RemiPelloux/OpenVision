
/* Address: 0x18000a750; Evidence: ev_47539b1e24b5a063ac0ec4de0aac4f9ccb66c7a38005c7540b1238dd43c4b2d9 */

uint FUN_18000a750(uint param_1)

{
  uint uVar1;
  undefined4 *puVar2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_18001baf0;
    DAT_18001baf0 = param_1;
  }
  else {
    puVar2 = (undefined4 *)FUN_1800061a0();
    *puVar2 = 0x16;
    FUN_180005ff8();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}

