import { computeRotationSchedule } from '../utils/computeSchedule';

describe('computeRotationSchedule', () => {
  const presenters = ['Alice', 'Bob', 'Charlie', 'David'];
  const tables = ['Table 1', 'Table 2', 'Table 3'];

  test('should generate a correct number of slots', () => {
    const schedule = computeRotationSchedule(presenters, tables);
    expect(schedule.length).toBe(24 * 3);
  });

  test('should assign all presenters and breaks correctly', () => {
    const schedule = computeRotationSchedule(presenters, tables);
    schedule.forEach((slot) => {
      const assignedPresenters = slot.assignments.map((a) => a.presenter);
      expect(assignedPresenters.length).toBe(tables.length + 1);
      expect(new Set(assignedPresenters).size).toBe(4);
    });
  });

  test('should rotate presenters correctly', () => {
    const schedule = computeRotationSchedule(presenters, tables);
    const firstSlot = schedule[0].assignments.map((a) => a.presenter);
    const nextSlot = schedule[1].assignments.map((a) => a.presenter);
    expect(firstSlot).not.toEqual(nextSlot);
  });

  test("should include 'Break' in every shift", () => {
    const schedule = computeRotationSchedule(presenters, tables);
    schedule.forEach((slot) => {
      expect(slot.assignments.some((a) => a.presenter === 'Break')).toBe(true);
    });
  });
});
