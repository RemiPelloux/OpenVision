
/* Address: 0x18000e870; Evidence: ev_1c33242cefb4ea8c297c07c134f93f2a9481f4bc1d7627278f8ee6d12534c91f */

uint FUN_18000e870(void)

{
  return *(uint *)(*(longlong *)((longlong)ProcessEnvironmentBlock + 0x20) + 8) >> 0x1f;
}

