
/* Address: 0x180006a80; Evidence: ev_dbf6bc2ec83b02fb0a235a659a7818a1bb92e4b5de107d42bfe354e6fc569925 */

uint FUN_180006a80(void)

{
  return *(uint *)(*(longlong *)((longlong)ProcessEnvironmentBlock + 0x20) + 8) >> 0x1f;
}

