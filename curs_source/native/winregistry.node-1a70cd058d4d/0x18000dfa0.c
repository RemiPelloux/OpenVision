
/* Address: 0x18000dfa0; Evidence: ev_5da3697ca842b05e3f58264ddca74fb097cd2f9d967efd03d66191001a0baa0b */

/* WARNING: Removing unreachable block (ram,0x00018000e020) */
/* WARNING: Removing unreachable block (ram,0x00018000e012) */
/* WARNING: Removing unreachable block (ram,0x00018000dfb7) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_18000dfa0(void)

{
  longlong lVar1;
  int *piVar2;
  undefined8 uVar3;
  byte in_XCR0;
  
  _DAT_18001cbc0 = 0;
  DAT_18001cbc4 = 0;
  lVar1 = cpuid_Version_info(1);
  if ((*(uint *)(lVar1 + 0xc) & 0x18001000) == 0x18001000) {
    uVar3 = xinuse(0);
    if ((in_XCR0 & (byte)uVar3 & 6) == 6) {
      _DAT_18001cbc0 = 1;
      DAT_18001cbc4 = 1;
    }
    else {
      _DAT_18001cbc0 = 0;
    }
  }
  if ((_DAT_18001cbc0 != 0) && (piVar2 = (int *)cpuid_basic_info(0), 6 < *piVar2)) {
    lVar1 = cpuid_Extended_Feature_Enumeration_info(7);
    if ((*(uint *)(lVar1 + 4) & 0x20) != 0) {
      DAT_18001cbc4 = 3;
      _DAT_18001cbc0 = 3;
      return 0;
    }
  }
  return 0;
}

