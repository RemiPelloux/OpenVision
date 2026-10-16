
/* Address: 0x1800050d0; Evidence: ev_6b0ae57dea262a4121074677e1787eafc607b9d907d3f6419d50af25a24d01c3 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_1800050d0(void)

{
  code *pcVar1;
  BOOL BVar2;
  undefined1 *puVar3;
  undefined1 auStack_38 [8];
  undefined1 auStack_30 [48];
  
  puVar3 = auStack_38;
  BVar2 = IsProcessorFeaturePresent(0x17);
  if (BVar2 != 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(2);
    puVar3 = auStack_30;
  }
  *(undefined8 *)(puVar3 + -8) = 0x1800050fb;
  FUN_1800051a4((PCONTEXT)&DAT_180021ca0);
  _DAT_180021c10 = *(undefined8 *)(puVar3 + 0x38);
  _DAT_180021d38 = puVar3 + 0x40;
  _DAT_180021d20 = *(undefined8 *)(puVar3 + 0x40);
  _DAT_180021c00 = 0xc0000409;
  _DAT_180021c04 = 1;
  _DAT_180021c18 = 1;
  DAT_180021c20 = 2;
  *(undefined8 *)(puVar3 + 0x20) = DAT_180021000;
  *(undefined8 *)(puVar3 + 0x28) = DAT_180021040;
  *(undefined8 *)(puVar3 + -8) = 0x18000519d;
  DAT_180021d98 = _DAT_180021c10;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_1800154e8);
  return;
}

