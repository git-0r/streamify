import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import KeyMetrics from "@/components/key-metrics";

beforeAll(() => {
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

describe("KeyMetrics Component", () => {
  it("renders the main title", () => {
    render(<KeyMetrics />);
    expect(screen.getByText("Key Metrics")).toBeInTheDocument();
  });

  it("renders total users card with correct value", () => {
    render(<KeyMetrics />);
    expect(screen.getByText("Total users")).toBeInTheDocument();
    expect(screen.getByText("934929")).toBeInTheDocument();
  });

  it("renders active users card with correct value", () => {
    render(<KeyMetrics />);
    expect(screen.getByText("Active users")).toBeInTheDocument();
    expect(screen.getByText("232938")).toBeInTheDocument();
  });

  it("renders total streams card with correct value", () => {
    render(<KeyMetrics />);
    expect(screen.getByText("Total streams")).toBeInTheDocument();
    expect(screen.getByText("38473847")).toBeInTheDocument();
  });

  it("renders revenue card with correct value", () => {
    render(<KeyMetrics />);
    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(screen.getByText("$16,232.65")).toBeInTheDocument();
  });

  it("renders revenue chart", () => {
    render(<KeyMetrics />);
    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(
      screen.getByText(
        "The total revenue generated from subscriptions and advertisements."
      )
    ).toBeInTheDocument();
  });

  it("renders top artist information", () => {
    render(<KeyMetrics />);
    expect(screen.getByText("Top artist")).toBeInTheDocument();
    expect(screen.getByText("Huan Lee")).toBeInTheDocument();
  });
});
