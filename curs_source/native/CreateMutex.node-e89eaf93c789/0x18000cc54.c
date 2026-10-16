
/* Address: 0x18000cc54; Evidence: ev_4c26874aa0ff0ea903efb95c70ba730c1e5bfe8b42a70aeea3264eae60049e96 */

uint FUN_18000cc54(void)

{
  return *(uint *)(*(longlong *)((longlong)ProcessEnvironmentBlock + 0x20) + 8) >> 0x1f;
}

