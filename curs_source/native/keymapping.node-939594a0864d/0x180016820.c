
/* Address: 0x180016820; Evidence: ev_54f52157d024f34cb47e2b98a7838185c62191509a4b66336030ca691a6e96ed */

/* WARNING: Removing unreachable block (ram,0x0001800168a0) */
/* WARNING: Removing unreachable block (ram,0x000180016892) */
/* WARNING: Removing unreachable block (ram,0x000180016837) */

undefined8 FUN_180016820(void)

{
  longlong lVar1;
  int *piVar2;
  undefined8 uVar3;
  byte in_XCR0;
  
  DAT_180028c50 = 0;
  DAT_180028c54 = 0;
  lVar1 = cpuid_Version_info(1);
  if ((*(uint *)(lVar1 + 0xc) & 0x18001000) == 0x18001000) {
    uVar3 = xinuse(0);
    if ((in_XCR0 & (byte)uVar3 & 6) == 6) {
      DAT_180028c50 = 1;
      DAT_180028c54 = 1;
    }
    else {
      DAT_180028c50 = 0;
    }
  }
  if ((DAT_180028c50 != 0) && (piVar2 = (int *)cpuid_basic_info(0), 6 < *piVar2)) {
    lVar1 = cpuid_Extended_Feature_Enumeration_info(7);
    if ((*(uint *)(lVar1 + 4) & 0x20) != 0) {
      DAT_180028c54 = 3;
      DAT_180028c50 = 3;
      return 0;
    }
  }
  return 0;
}

