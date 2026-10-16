
/* Address: 0x180009ec0; Evidence: ev_036199ef2901f3be4917dbfb9db07ab559784dda1286c801af0b04fe0257fc18 */

undefined4 FUN_180009ec0(longlong param_1)

{
  undefined4 uVar1;
  undefined4 *puVar2;
  
  if (param_1 == 0) {
    puVar2 = (undefined4 *)FUN_1800061a0();
    *puVar2 = 0x16;
    FUN_180005ff8();
    uVar1 = 0xffffffff;
  }
  else {
    uVar1 = *(undefined4 *)(param_1 + 0x18);
  }
  return uVar1;
}

