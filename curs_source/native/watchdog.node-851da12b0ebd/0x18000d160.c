
/* Address: 0x18000d160; Evidence: ev_0f3105e64ffd9fb8a73f89dcbd79c4bb69b056b341c23196d0697b88796fbf84 */

/* WARNING: Removing unreachable block (ram,0x00018000d1e0) */
/* WARNING: Removing unreachable block (ram,0x00018000d1d2) */
/* WARNING: Removing unreachable block (ram,0x00018000d177) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_18000d160(void)

{
  longlong lVar1;
  int *piVar2;
  undefined8 uVar3;
  byte in_XCR0;
  
  _DAT_18001baf8 = 0;
  DAT_18001bafc = 0;
  lVar1 = cpuid_Version_info(1);
  if ((*(uint *)(lVar1 + 0xc) & 0x18001000) == 0x18001000) {
    uVar3 = xinuse(0);
    if ((in_XCR0 & (byte)uVar3 & 6) == 6) {
      _DAT_18001baf8 = 1;
      DAT_18001bafc = 1;
    }
    else {
      _DAT_18001baf8 = 0;
    }
  }
  if ((_DAT_18001baf8 != 0) && (piVar2 = (int *)cpuid_basic_info(0), 6 < *piVar2)) {
    lVar1 = cpuid_Extended_Feature_Enumeration_info(7);
    if ((*(uint *)(lVar1 + 4) & 0x20) != 0) {
      DAT_18001bafc = 3;
      _DAT_18001baf8 = 3;
      return 0;
    }
  }
  return 0;
}

