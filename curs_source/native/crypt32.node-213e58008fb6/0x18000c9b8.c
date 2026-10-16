
/* Address: 0x18000c9b8; Evidence: ev_8a2a07f4bae103ffcc66a2ee529f9895ceaea64efc3d20c4ddedbd3e8c3df8ff */

uint FUN_18000c9b8(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}

