
/* Address: 0x18000e044; Evidence: ev_1098789fd237db21bb00c3db4c3cb373c8c4b4d65fcf6b3108e2c818c2219960 */

uint FUN_18000e044(void)

{
  return *(uint *)(*(longlong *)((longlong)ProcessEnvironmentBlock + 0x20) + 8) >> 0x1f;
}

