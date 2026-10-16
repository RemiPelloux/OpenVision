
/* Address: 0x18000e028; Evidence: ev_67d9f542be3ab7626bf8b54eb0aad6c48935c8b4c02026c537626c337807141f */

uint FUN_18000e028(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}

