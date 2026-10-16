
/* Address: 0x180009da0; Evidence: ev_55dec116bd3da04ba7e0bbe506284afafd67fdb720d743f53e61b6b9a35f0327 */

undefined4 FUN_180009da0(longlong param_1)

{
  undefined4 uVar1;
  undefined4 *puVar2;
  
  if (param_1 == 0) {
    puVar2 = (undefined4 *)FUN_180006080();
    *puVar2 = 0x16;
    FUN_180005ed8();
    uVar1 = 0xffffffff;
  }
  else {
    uVar1 = *(undefined4 *)(param_1 + 0x18);
  }
  return uVar1;
}

