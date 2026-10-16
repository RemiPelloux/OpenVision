
/* Address: 0x180002540; Evidence: ev_b99cae252002dff27ede7206d935e5499d3d1b0b69038413d137edb0e627f765 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180002540(void)

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
  *(undefined8 *)(puVar3 + -8) = 0x18000256b;
  FUN_180002614((PCONTEXT)&DAT_18001bbf0);
  _DAT_18001bb60 = *(undefined8 *)(puVar3 + 0x38);
  _DAT_18001bc88 = puVar3 + 0x40;
  _DAT_18001bc70 = *(undefined8 *)(puVar3 + 0x40);
  _DAT_18001bb50 = 0xc0000409;
  _DAT_18001bb54 = 1;
  _DAT_18001bb68 = 1;
  DAT_18001bb70 = 2;
  *(undefined8 *)(puVar3 + 0x20) = DAT_18001b000;
  *(undefined8 *)(puVar3 + 0x28) = DAT_18001b040;
  *(undefined8 *)(puVar3 + -8) = 0x18000260d;
  DAT_18001bce8 = _DAT_18001bb60;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_180010468);
  return;
}

